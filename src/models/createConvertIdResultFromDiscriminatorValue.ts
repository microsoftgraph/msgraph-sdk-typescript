import { deserializeIntoConvertIdResult } from './deserializeIntoConvertIdResult';
import { type ConvertIdResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConvertIdResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConvertIdResult;
}
