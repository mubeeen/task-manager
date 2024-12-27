import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../store/store";
import { saveNewTask } from "../../store/features/taskSlice";

interface NewTaskProps {}

const NewTask: React.FC<NewTaskProps> = ({}) => {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [fields, setFields] = useState<string[]>([""]);
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [currentStatusList] = useState<string[]>(["todo", "doing", "done"]);

  const dispatch = useAppDispatch();

  const handleOnSubmitTaskForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "task, description, fields, currentStatus",
      task,
      description,
      fields,
      currentStatus
    );
    // Uncomment the line below to dispatch the task when the form is submitted
    // dispatch(saveNewTask({ task, description, fields, currentStatus }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value);
  };

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  const handleAddField = () => {
    setFields((prevFields) => [...prevFields, ""]);
  };

  const handleRemoveField = (index: number) => {
    setFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  return (
    <>
      <Form className="mb-3" onSubmit={handleOnSubmitTaskForm}>
        <Form.Group className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        {fields.map((field, index) => (
          <Form.Group key={index} className="mb-3">
            <Form.Label>{`Subtask ${index + 1}`}</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value)}
              />
              <Button
                variant="link"
                onClick={() => handleRemoveField(index)}
                className="p-0 ms-2"
              >
                <FaTimes />
              </Button>
            </div>
          </Form.Group>
        ))}
        <Button
          variant="outline-primary"
          className="mb-3"
          onClick={handleAddField}
        >
          Add Subtask
        </Button>
        <Form.Group controlId="formGridState" className="">
          <Form.Label>Current Status</Form.Label>
          <Form.Select value={currentStatus} onChange={handleStatusChange}>
            {currentStatusList.map((statusValue, index) => (
              <option key={index} value={statusValue}>
                {statusValue}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewTask;
