package com.infosys.expenseManagementApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.infosys.expenseManagementApplication.bean.Expense;
import com.infosys.expenseManagementApplication.bean.ExpenseUser;

public interface ExpenseUserRepository extends JpaRepository<ExpenseUser, String > {
//	@Query("select a from Expense a where a.categoryId=?1")
//
//	public List<Expense> getExpensesByCategory(Long categoryId);
//
//   @Query("select a from Expense a where a.customerId=?1")
//
//	public List<Expense> getExpensesByCustomer(String customerId);
//   
//   @Query("SELECT max(expenseNumber) from Expense")
//	public String getMaxId();
//	
 
}
