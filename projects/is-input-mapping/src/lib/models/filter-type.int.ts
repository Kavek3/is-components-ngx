import { iconBetween, iconEmpty, iconEq, iconGeq, iconGt, iconIn, iconLeq, iconLt, iconNeq, iconNotBetween, iconNotEmpty, iconNotIn } from './filter-type.internal';
import { FilterType, IFilterDef } from './filter.type';

export const INT_DEFS: { [key in FilterType]?: IFilterDef } = {
  IntEq: {
    Type: 'IntEq',
    Name: 'equals',
    Icon: iconEq,
    InputType: 'number',
  },
  IntNotEq: {
    Type: 'IntNotEq',
    Name: 'not equals',
    Icon: iconNeq,
    InputType: 'number',
  },
  IntGt: {
    Type: 'IntGt',
    Name: 'greater than',
    Icon: iconGt,
    InputType: 'number',
  },
  IntLt: {
    Type: 'IntLt',
    Name: 'less than',
    Icon: iconLt,
    InputType: 'number',
  },
  IntGeq: {
    Type: 'IntGeq',
    Name: 'greater of equals',
    Icon: iconGeq,
    InputType: 'number',
  },
  IntLeq: {
    Type: 'IntLeq',
    Name: 'less of equals',
    Icon: iconLeq,
    InputType: 'number',
  },
  IntIn: {
    Type: 'IntIn',
    Name: 'in',
    Icon: iconIn,
    InputType: 'text',
  },
  IntNotIn: {
    Type: 'IntNotIn',
    Name: 'not in',
    Icon: iconNotIn,
    InputType: 'text',
  },
  IntBetween: {
    Type: 'IntBetween',
    Name: 'between',
    Icon: iconBetween,
    InputType: 'number-range',
  },
  IntNotBetween: {
    Type: 'IntNotBetween',
    Name: 'not between',
    Icon: iconNotBetween,
    InputType: 'number-range',
  },
  IntEmpty: {
    Type: 'IntEmpty',
    Name: 'empty',
    Icon: iconEmpty,
    InputType: 'none',
  },
  IntNotEmpty: {
    Type: 'IntNotEmpty',
    Name: 'not empty',
    Icon: iconNotEmpty,
    InputType: 'none',
  },
};