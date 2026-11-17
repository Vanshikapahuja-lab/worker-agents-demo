'use strict';

// INTENTIONALLY INSECURE - demo file for the Harness security scan / Auto-Remediation agent.
// It is not imported anywhere, and every credential below is a fake placeholder.

const DB_PASSWORD = 'SuperSecret123!';              // hardcoded password (fake)
const AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE';   // AWS documentation example key (fake)

function findUser(db, userName) {
  // SQL built by string concatenation (SQL injection pattern)
  const query = "SELECT * FROM users WHERE name = '" + userName + "'";
  return db.query(query);
}

function runExpression(expression) {
  // evaluates arbitrary input (code injection pattern)
  return eval(expression);
}

module.exports = { findUser, runExpression, DB_PASSWORD, AWS_ACCESS_KEY_ID };
