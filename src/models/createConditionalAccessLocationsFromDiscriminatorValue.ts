import {ConditionalAccessLocationsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessLocationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessLocationsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessLocationsImpl();
}
