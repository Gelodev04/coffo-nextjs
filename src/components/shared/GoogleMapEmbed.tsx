import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7416.760686676785!2d-97.5100918327522!3d35.46643724267316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbrazil%20restaurant!5e1!3m2!1sen!2sph!4v1743301094196!5m2!1sen!2sph"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
