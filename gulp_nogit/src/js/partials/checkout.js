let select2_auditing = document.getElementById("deliverySelect");
if (select2_auditing) {
  $(document).ready(function () {
    $(".js-example-basic-single").select2();

    // Використання Select2 API для обробки події change
    $("#deliverySelect").on("change", function () {
      let selectedValue = $(this).val();

      let novaPoshtaBlock = document.getElementById("novaPoshtaBlock");
      let courierNpBlock = document.getElementById("courierNpBlock");
      let pickupStoreBlock = document.getElementById("pickupStoreBlock");

      // Приховуємо всі блоки спочатку
      novaPoshtaBlock.style.display = "none";
      courierNpBlock.style.display = "none";
      pickupStoreBlock.style.display = "none";

      // Показуємо потрібний блок залежно від вибраного значення
      switch (selectedValue) {
        case "nova_poshta":
          novaPoshtaBlock.style.display = "block";
          break;
        case "courier_np":
          courierNpBlock.style.display = "block";
          break;
        case "pickup_store":
          pickupStoreBlock.style.display = "block";
          break;
      }
    });
    $(".js-example-basic-single-city").select2({
      placeholder: "Виберіть населений пункт",
    });
    $(".js-example-basic-single-viddilenya").select2({
      placeholder: "Виберіть відділення",
      allowClear: true,
    });
  });
}
