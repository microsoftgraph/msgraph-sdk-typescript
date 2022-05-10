import {LocalizedDescriptionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedDescriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedDescriptionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedDescriptionImpl();
}
