import {LocalizedLabelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedLabelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedLabelImpl();
}
