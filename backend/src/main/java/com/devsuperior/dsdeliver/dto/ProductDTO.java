package com.devsuperior.dsdeliver.dto;

import com.devsuperior.dsdeliver.entity.Product;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {

    private Long id;
    private String name;
    private Double price;
    private String description;
    private String imageUri;

    public ProductDTO(Product entity) {
        id = entity.getId();
        name = entity.getName();
        price = entity.getPrice();
        description = entity.getDescription();
        imageUri = entity.getImageUri();
    }
}
