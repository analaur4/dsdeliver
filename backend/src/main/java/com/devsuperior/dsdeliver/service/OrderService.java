package com.devsuperior.dsdeliver.service;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.entity.Order;
import com.devsuperior.dsdeliver.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> orderList = orderRepository.findOrderWithProducts();
        return orderList.stream().map(ord -> new OrderDTO(ord)).collect(Collectors.toList());
    }
}
