import { deserializeIntoCurrencyColumn } from './deserializeIntoCurrencyColumn';
import { type CurrencyColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCurrencyColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCurrencyColumn;
}
