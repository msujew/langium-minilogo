/******************************************************************************
 * This file was generated by langium-cli 0.5.0-next.f2b3802.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { loadGrammar, Grammar } from 'langium';

let loadedMiniLogoGrammar: Grammar | undefined;
export const MiniLogoGrammar = (): Grammar => loadedMiniLogoGrammar ||(loadedMiniLogoGrammar = loadGrammar(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "MiniLogo",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Model",
      "entry": true,
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "stmts",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Stmt"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "defs",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Def"
              },
              "arguments": []
            }
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Stmt",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Cmd"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Macro"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Cmd",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Pen"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Move"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "For"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Macro",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "def",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "Def"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "ID"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "args",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Expr"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "args",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "Expr"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Def",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "def"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "params",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Param"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "params",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "Param"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Block"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Pen",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "pen"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "mode",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "up"
                },
                {
                  "$type": "Keyword",
                  "value": "down"
                }
              ]
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Move",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "move"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "ex",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ","
          },
          {
            "$type": "Assignment",
            "feature": "ey",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "For",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "for"
          },
          {
            "$type": "Assignment",
            "feature": "var",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Param"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Assignment",
            "feature": "e1",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "to"
          },
          {
            "$type": "Assignment",
            "feature": "e2",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Block"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Block",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "body",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Stmt"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Param",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "ID"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Expr",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Lit"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Ref"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "BinExpr"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Group"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "NegExpr"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Lit",
      "definition": {
        "$type": "Assignment",
        "feature": "val",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "INT"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ref",
      "definition": {
        "$type": "Assignment",
        "feature": "val",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$refText": "Param"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ID"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BinExpr",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "op",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "BinOp"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "e1",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "e2",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BinOp",
      "definition": {
        "$type": "Assignment",
        "feature": "val",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "Keyword",
              "value": "add"
            },
            {
              "$type": "Keyword",
              "value": "sub"
            },
            {
              "$type": "Keyword",
              "value": "mul"
            },
            {
              "$type": "Keyword",
              "value": "div"
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Group",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "ge",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NegExpr",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "-"
          },
          {
            "$type": "Assignment",
            "feature": "ne",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Expr"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "-?[0-9]+"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));
