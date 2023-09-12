import { deserializeIntoLocalizedLabel } from './deserializeIntoLocalizedLabel';
import { type LocalizedLabel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocalizedLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedLabel;
}
