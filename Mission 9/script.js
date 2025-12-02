function co(){
    window.open("correction.html", "_blank")
}
function ferme(){
    window.close()
}


function effacer() {
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  }

  function testqcm() {
    let score = 0;


    if (document.getElementById("q1_1").checked) score++;
    if (document.getElementById("q2_3").checked) score++;
    if (document.getElementById("q3_1").checked) score++;
    if (document.getElementById("q4_3").checked) score++;
    if (document.getElementById("q5_2").checked) score++;

    if (document.getElementById("q11_1").checked) score++;
    if (document.getElementById("q12_3").checked) score++;
    if (document.getElementById("q13_3").checked) score++;
    if (document.getElementById("q14_2").checked) score++;
    if (document.getElementById("q15_2").checked) score++;

    if (document.getElementById("q21_2").checked) score++;
    if (document.getElementById("q21_3").checked) score++;
    if (document.getElementById("q21_4").checked) score++;
    if (document.getElementById("q22_2").checked) score++;
    if (document.getElementById("q23_2").checked) score++;
    if (document.getElementById("q24_1").checked) score++;
    if (document.getElementById("q25_2").checked) score++;

    if (document.getElementById("q31_4").checked) score++;
    if (document.getElementById("q32_2").checked) score++;
    if (document.getElementById("q33_3").checked) score++;
    if (document.getElementById("q34_4").checked) score++;
    if (document.getElementById("q35_1").checked) score++;

    if (document.getElementById("q41_1").checked) score++;
    if (document.getElementById("q42_2").checked) score++;
    if (document.getElementById("q43_4").checked) score++;
    if (document.getElementById("q44_1").checked) score++;
    if (document.getElementById("q45_3").checked) score++;

    alert("Score : " + score + "/25");
}

