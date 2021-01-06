package com.devsuperior.dsdeliver.entity;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "tb_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    private String address;

    @Setter
    @Getter
    private Double latitude;

    @Setter
    @Getter
    private Double longitude;

    @Setter
    @Getter
    private Instant moment;

    @Setter
    @Getter
    private OrderStatus status;

    @ManyToMany
    @JoinTable(name = "tb_order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    @Getter
    private Set<Product> products = new HashSet<>();
}
