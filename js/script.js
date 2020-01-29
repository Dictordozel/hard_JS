let num = 1234545627863278;

let txt = '               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam saepe possimus, reiciendis ab delectus optio unde doloribus, iure quam laboriosam esse nobis. Eveniet illum in sed molestias consequatur quis quidem quaerat? Repudiandae voluptatibus, quam debitis perferendis neque tenetur, deleniti, dignissimos odio blanditiis eligendi ad ut id vitae mollitia perspiciatis.                  ';

let short = '     Lorem ipsum dolor    ';


function getType(a) {
    switch(true) {
        case (typeof a !== 'string'):
            alert('This is not a text!!!');
        break;
        default:
        a = a.trim();
    }
    switch(true) {
        case (a.length > 30):
            alert((a.substring(0, 30)) + '...');
            break;
        default:
            alert(a);
        }
    }

getType(num);
getType(txt);
getType(short);