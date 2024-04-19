import React, { Component } from "react";

const Cmsbooks = () => {
  return (
    <div>
      <form encType="multipart/form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name of the product"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Upload your file"
          onChange={this.fileSelectedHandler}
        />
        <br />
        <button type="submit" onClick={this.fileUploadHandler}>
          Add Products
        </button>
      </form>
    </div>
  );
};

export default Cmsbooks;
