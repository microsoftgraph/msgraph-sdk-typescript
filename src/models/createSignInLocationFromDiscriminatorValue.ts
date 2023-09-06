import { deserializeIntoSignInLocation } from './deserializeIntoSignInLocation';
import { type SignInLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInLocation;
}
