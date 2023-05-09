import {deserializeIntoCurrencyColumn} from './deserializeIntoCurrencyColumn';
import {CurrencyColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCurrencyColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCurrencyColumn;
}
