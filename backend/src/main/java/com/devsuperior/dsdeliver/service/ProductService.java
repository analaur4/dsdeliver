package com.devsuperior.dsdeliver.service;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entity.Product;
import com.devsuperior.dsdeliver.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> productList = productRepository.findAllByOrderByNameAsc();
        return productList.stream().map(prd -> new ProductDTO(prd)).collect(Collectors.toList());
    }
}
