import {Modal, Button, Input} from "antd";
import React, {PropTypes} from "react";

class AddProgramModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      visible: false,
      program: {
        name: ""
      }
    };

    this.programNameChange = this.programNameChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  programNameChange(event) {
    const program = this.state.program;
    program.name = event.target.value;
    this.setState({program});
  }

  showModal () {
    this.setState({
      visible: true
    });
  };

  handleOk() {
    this.props.handleChange(this.state.program.name);
    this.setState({
      visible: false
    });
  };

  handleCancel () {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Program
        </Button>
        <Modal
          visible={this.state.visible}
          title="Add Program"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" size="large" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="ok" type="primary" size="large" onClick={this.handleOk}>
              Add
            </Button>
          ]}>
          <div>
            <Input placeholder="Program Name"
                   onChange={this.programNameChange}
                    value={this.state.program.name} />
          </div>
        </Modal>
      </div>
    );
  }
}

AddProgramModal.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default AddProgramModal;