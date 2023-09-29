import React from "react";

const Display = () => {
    return (
        <div className='container'>
            <div className='flex justify-center'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>arun pondit</td>
                            <td>arun123@gmail.com</td>
                            <td>
                                <button className='remove-btn'>remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Display;
