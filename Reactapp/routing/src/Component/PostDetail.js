import React from 'react';

function PostDetail(props){
    console.log(props)
    console.log(props.match.params.topic)
    console.log(props.location.search.split("=")[1])
    return(
        <div className ="panel panel-primary">
        <div className ="panel-heading">
            <h2>{props.match.params.topic}</h2>
        </div>
        <div className="panel-body">
            <p>
            {props.match.params.topic} छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.
                 </p>
                 <h3>we are on page number {props.location.search.split("=")[1]}</h3>
        </div>
    </div>
    )
}
export default PostDetail