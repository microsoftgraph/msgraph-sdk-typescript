import {deserializeIntoSearchEntity} from './deserializeIntoSearchEntity';
import {SearchEntity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchEntity;
}
