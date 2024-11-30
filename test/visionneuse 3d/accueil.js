function sortModels(criterion) {
    const modelsContainer = document.getElementById('models-container');
    const models = Array.from(modelsContainer.getElementsByClassName('model'));

    models.sort((a, b) => {
        let valueA = a.getAttribute(`data-${criterion}`);
        let valueB = b.getAttribute(`data-${criterion}`);

        if (criterion === 'date') {
            // Pour les dates, utilise le type Date pour une comparaison correcte
            valueA = new Date(valueA);
            valueB = new Date(valueB);
            return valueA - valueB;
        } else {
            // Pour les noms et les catégories, compare les chaînes de caractères
            return valueA.localeCompare(valueB);
        }
    });

    // Réorganise les modèles dans le conteneur
    models.forEach(model => modelsContainer.appendChild(model));
}
