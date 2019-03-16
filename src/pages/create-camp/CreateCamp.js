import React, { Component } from 'react';
import { Form, Input, Row, message } from 'antd';
import './CreateCamp.scss';

const { TextArea } = Input;

export default class CreateCamp extends Component {
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
        let flag = this.checkForm(titleValue, '标题');
        flag = this.checkForm(descriptionValue, '描述');

        if (flag) {
            console.log(titleValue, descriptionValue);
        }
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
        console.log('返回');
    };

    render() {
        const { totalCount, descriptionValue } = this.state;
        return (
            <div className="create-camp-container">
                <div className="back-btn">返回</div>
                <div className="create-camp">创建训练营</div>
                <Form layout="inline" className="create-camp-form">
                    <Row>
                        <Form.Item label="标题">
                            <Input placeholder="请输入标题" onChange={this.handleTitleChange}/>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="描述">
                            <div className="text-count">{descriptionValue.length}/{totalCount}</div>
                            <TextArea placeholder={`请输入描述，最多${totalCount}个字符`} onChange={this.handleDescriptionChange} maxLength={totalCount}/>
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


