CREATE TABLE sample (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE customers (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT customers_email_unique UNIQUE(email),
  CONSTRAINT customers_phone_unique  UNIQUE(phone)
) ENGINE = InnoDB;