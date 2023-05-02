import {deserializeIntoIntuneBrand} from './deserializeIntoIntuneBrand';
import {IntuneBrand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntuneBrandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntuneBrand;
}
