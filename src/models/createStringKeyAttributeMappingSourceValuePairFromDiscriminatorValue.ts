import { deserializeIntoStringKeyAttributeMappingSourceValuePair } from './deserializeIntoStringKeyAttributeMappingSourceValuePair';
import { type StringKeyAttributeMappingSourceValuePair } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStringKeyAttributeMappingSourceValuePair;
}
