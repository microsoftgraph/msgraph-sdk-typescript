import { deserializeIntoIntuneBrand } from './deserializeIntoIntuneBrand';
import { type IntuneBrand } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntuneBrandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntuneBrand;
}
