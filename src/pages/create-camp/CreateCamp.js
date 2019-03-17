import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Form, Input, Row, message } from 'antd';
import './CreateCamp.scss';

const { TextArea } = Input;

class CreateCamp extends Component {
    state = {
        totalCount: 300,
        descriptionValue: ''
    };

    handleTitleChange = e => {
        this.setState({
            titleValue: e.target.value
        })
    };

    handleDescriptionChange = e => {
        this.setState({
            descriptionValue: e.target.value
        })
    };

    handleSubmit = () => {
        const { titleValue, descriptionValue } = this.state;
        if(!this.checkForm(titleValue, '标题')) return
        if(!this.checkForm(descriptionValue, '描述')) return

        this.fetchApi(titleValue, descriptionValue);
    };

    fetchApi(title, description) {
        fetch('http://10.205.22.91:8080/camp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
        .then(res => res.json())
        .then(res => {
            this.handleClose();
        })
    };

    checkForm = (value, label) => {
        if (!value || !value.trim()) {
            message.destroy();
            message.warning(label + '不能为空');
            return false;
        }
        return true;
    };

    handleClose = () => {
        this.props.history.goBack();
    };

    render() {
        const { totalCount, descriptionValue } = this.state;
        return (
            <div className="create-camp-container">
                <div className="back-btn" onClick={this.handleClose}>返回</div>
                <div className="create-camp">创建训练营</div>
                <Form layout="inline" className="create-camp-form">
                    <Row>
                        <Form.Item label="标题">
                            <Input onChange={this.handleTitleChange}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="描述">
                            <div className="text-count">{descriptionValue.length}/{totalCount}</div>
                            <TextArea className='ant-d-text-area' onChange={this.handleDescriptionChange} maxLength={totalCount}/>
                        </Form.Item>
                    </Row>
                    <Row className="submit-row">
                        <div onClick={this.handleClose}>取消</div>
                        <div className="submit-btn" onClick={this.handleSubmit}>保存</div>
                    </Row>
                </Form>
            </div>
        )
    }
};
export default withRouter(CreateCamp);

