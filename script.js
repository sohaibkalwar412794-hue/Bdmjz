document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("fireworkBtn");
    const dashboard = document.getElementById("dashboard");

    button.addEventListener("click", function () {

        dashboard.style.display = "none";

        const celebration = document.createElement("div");

        celebration.id = "celebration";

        celebration.innerHTML = `
            <div class="birthdayText">

                <div>Happy Birthday</div>

                <div>Hafsa</div>

                <div class="cake">

                    <div class="candle"></div>

                    <div class="cakeEmoji"></div>

                </div>

                <img src="cake.png" class="birthdayImage">

            </div>
        `;

        document.body.appendChild(celebration);

        for (let f = 0; f < 15; f++) {

            setTimeout(function () {

                const x = 10 + Math.random() * 80;
                const y = 10 + Math.random() * 65;

                for (let i = 0; i < 50; i++) {

                    const spark = document.createElement("span");

                    spark.className = "spark";

                    spark.style.left = x + "%";
                    spark.style.top = y + "%";

                    const angle = Math.random() * Math.PI * 2;

                    const distance =
                        60 + Math.random() * 160;

                    spark.style.setProperty(
                        "--x",
                        Math.cos(angle) * distance + "px"
                    );

                    spark.style.setProperty(
                        "--y",
                        Math.sin(angle) * distance + "px"
                    );

                    spark.style.backgroundColor =
                        `hsl(${Math.random() * 360}, 100%, 60%)`;

                    celebration.appendChild(spark);

                    setTimeout(function () {
                        spark.remove();
                    }, 1300);

                }

            }, f * 400);

        }

    });

});