import React from "react";

const Map = () => {
    return (
        <div>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.94513515726!2d91.84816497512907!3d24.90306177790143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505537d8a66533%3A0xc5a564325239470e!2sBagbari%20Rd%2C%20Sylhet!5e1!3m2!1sen!2sbd!4v1695079232689!5m2!1sen!2sbd'
                height={250}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full'
            />
        </div>
    );
};

export default Map;
