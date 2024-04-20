import Header from "./Header";
import Foot1 from "./Foot1";
import "./custom.css";
import { useState } from "react";
import axios from "axios";
const Cms = () => {
  const [state, setState] = useState({
    name: "",
    price: "",
    author: "",
    stock: "",
    category: "",
    discount: "",
    descr: "",
    selectedFile: null,
    filename: null,
  });
  /*const handleChange = () => {
    setState({
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      author: document.getElementById("author").value,
      stock: document.getElementById("stock").value,
      category: document.getElementById("category").value,
      discount: document.getElementById("discount").value,
      descr: document.getElementById("description").value,
    });
  };*/

  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };

  const fileUploadHandler = (event) => {
    event.preventDefault();
    let name1 = document.getElementById("name").value;
    let price1 = document.getElementById("price").value;
    let author1 = document.getElementById("author").value;
    let stock1 = document.getElementById("stock").value;
    let category1 = document.getElementById("category").value;
    let discount1 = document.getElementById("discount").value;
    let descr1 = document.getElementById("description").value;
    // let file = event.target.files[0].name;
    //let filename = document.getElementById("file").value;
    console.log(name1);
    let formData = new FormData();
    formData.append("name", name1);
    formData.append("price", price1);
    formData.append("author", author1);
    formData.append("stock", stock1);
    formData.append("category", category1);
    formData.append("discount", discount1);
    formData.append("description", descr1);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let control = true;
    axios
      .post("http://127.0.0.1:8000/booksAPI", formData, config)
      .then((res) => {
        if (res.status != 200) {
          control = false;
        }
      });
    if (control) {
      document.getElementById("success").innerHTML = "Uploaded Successfully";
    }
  };
  return (
    <>
      <Header />
      <div className="banner w-screen h-72 bg-mustardyellow flex justify-center items-center">
        <div className="w-12/12">
          <p className="text-4xl lg:text-7xl font-semibold overflow-hidden">
            CMS Application
          </p>
          <br />
          <p className="text-center text-lg">
            ( Your one stop Cms Solution for Books )
          </p>
        </div>
      </div>
      <p
        id="success"
        className="text-4xl ml-5 overflow-hidden font-bold h-16"
      ></p>
      <p className="mt-3 text-center font-roboto font-bold text-4xl overflow-hidden">
        Fill the details
      </p>
      <div className="formHolder mt-3">
        <form
          encType="multipart/form"
          className="w-[90vmin] lg:w-[70vmin] p-5 mb-4"
        >
          <input
            className="text-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Name of the product"
            ////onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="text"
            name="author"
            id="author"
            placeholder="Name of the author"
            ////onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            //onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="Number"
            name="stock"
            id="stock"
            placeholder="Enter Stock"
            //onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="text"
            name="category"
            id="category"
            placeholder="Enter category"
            //onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="Number"
            name="discount"
            id="discount"
            placeholder="Enter Discount"
            //onChange={handleChange}
          />
          <br />
          <input
            className="text-lg"
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
            //onChange={handleChange}
          />
          <br />

          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload your file"
            onChange={fileSelectedHandler}
          />

          <br />
          <button
            className="button bg-mustardyellow text-black p-3 font-bold"
            type="submit"
            onClick={fileUploadHandler}
          >
            Add Products
          </button>
        </form>
      </div>

      <Foot1 />
    </>
  );
};

export default Cms;
