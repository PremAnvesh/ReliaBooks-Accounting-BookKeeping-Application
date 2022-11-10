package com.example.reliaBooksApplication.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reliaBooks")
public class Expense {
	
	@Id
	private String id;
	private String expenseType;
	private double amount;
	private String date;
	private String assetType;
	private String transactionType;
	private String financialType;
	private String status;
	private String paymentType;
	private String notes;
	private double sgst;
	private double cgst;
	private double igst;
	private String supplierName;
	public Expense(String id ,String expenseType, double amount, String date, String assetType, String transactionType,
			String financialType, String notes, String status,String paymentType, double sgst, double cgst, double igst, String supplierName) {
		super();
		this.id = id;
		this.expenseType = expenseType;
		this.amount = amount;
		this.date = date;
		this.assetType = assetType;
		this.transactionType = transactionType;
		this.financialType = financialType;
		this.notes = notes;
		this.status = status;
		this.paymentType = paymentType;
		this.sgst = sgst;
		this.cgst = cgst;
		this.igst = igst;
		this.supplierName = supplierName;
	}

	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getExpenseType() {
		return expenseType;
	}

	public void setExpenseType(String expenseType) {
		this.expenseType = expenseType;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getAssetType() {
		return assetType;
	}

	public void setAssetType(String assetType) {
		this.assetType = assetType;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getFinancialType() {
		return financialType;
	}

	public void setFinancialType(String financialType) {
		this.financialType = financialType;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public double getSgst() {
		return sgst;
	}

	public void setSgst(double sgst) {
		this.sgst = sgst;
	}
	
	
	
	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public double getCgst() {
		return cgst;
	}

	public void setCgst(double cgst) {
		this.cgst = cgst;
	}

	public double getIgst() {
		return igst;
	}

	public void setIgst(double igst) {
		this.igst = igst;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
	
	
}


