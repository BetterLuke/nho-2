import React, { Component } from 'react';
import { Form, Input, Row } from 'antd';
import './AddCamp.scss';

const { TextArea } = Input;

export default class AddCamp extends Component {


    render() {
        return (
            <div>
                <div className="back-btn">返回</div>
                <div className="add-camp">创建训练营</div>
                <Form layout="inline" className="add-camp-form">
                    <Row>
                        <Form.Item label="标题">
                            <Input placeholder="请输入标题" />
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="描述">
                            <Input placeholder="请输入描述" />
                        </Form.Item>
                    </Row>
                </Form>
                {/*<form >
                    <div>
                        <label htmlFor="">标题</label>
                        <Input placeholder="请输入标题" />
                    </div>
                    <div>
                        <label htmlFor="">描述</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>*/}
            </div>
        )
    }

};