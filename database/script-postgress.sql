
CREATE TABLE provincias (
    id SERIAL PRIMARY KEY,
    name VARCHAR(75) NOT NULL,
    full_name VARCHAR(75) NOT NULL,
    latitude FLOAT,
    longitude FLOAT,
    display_order INT
);


INSERT INTO provincias (name, full_name, latitude, longitude, display_order) VALUES
('buenos-aires', 'Buenos Aires', -36.6769, -60.5588, 1),
('catamarca', 'Catamarca', -27.3358, -66.9477, 2),
('chaco', 'Chaco', -26.3864, -60.7653, 3),
('chubut', 'Chubut', -43.3002, -65.1023, 4),
('cordoba', 'Córdoba', -31.4201, -64.1888, 5),
('corrientes', 'Corrientes', -27.4692, -58.8306, 6),
('entre-rios', 'Entre Ríos', -31.7319, -60.5238, 7),
('formosa', 'Formosa', -24.8949, -60.0167, 8),
('jujuy', 'Jujuy', -24.1858, -65.2995, 9),
('la-pampa', 'La Pampa', -36.6167, -64.2833, 10),
('la-rioja', 'La Rioja', -29.4135, -66.8558, 11),
('mendoza', 'Mendoza', -32.8895, -68.8458, 12),
('misiones', 'Misiones', -27.3671, -55.8961, 13),
('neuquen', 'Neuquén', -38.9516, -68.0591, 14),
('rio-negro', 'Río Negro', -40.8135, -63.0000, 15),
('salta', 'Salta', -24.7829, -65.4232, 16),
('san-juan', 'San Juan', -31.5375, -68.5364, 17),
('san-luis', 'San Luis', -33.2950, -66.3356, 18),
('santa-cruz', 'Santa Cruz', -51.6230, -69.2168, 19),
('santa-fe', 'Santa Fe', -31.6333, -60.7000, 20),
('santiago-del-estero', 'Santiago del Estero', -27.7951, -64.2615, 21),
('tierra-del-fuego', 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54.8019, -68.3030, 22),
('tucuman', 'Tucumán', -26.8083, -65.2176, 23),
('caba', 'Ciudad Autónoma de Buenos Aires', -34.6037, -58.3816, 24);





