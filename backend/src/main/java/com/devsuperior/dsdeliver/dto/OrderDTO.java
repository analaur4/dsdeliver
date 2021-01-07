package com.devsuperior.dsdeliver.dto;

import com.devsuperior.dsdeliver.entity.Order;
import com.devsuperior.dsdeliver.entity.OrderStatus;
import lombok.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDTO {

    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;
    private List<ProductDTO> productList = new ArrayList<>();

    public OrderDTO(Order entity) {
        id = entity.getId();
        address = entity.getAddress();
        latitude = entity.getLatitude();
        longitude = entity.getLongitude();
        moment = entity.getMoment();
        status = entity.getStatus();
        productList = entity.getProducts().stream().map(prd -> new ProductDTO(prd)).collect(Collectors.toList());
    }
}
