import {LocalizedName} from './localizedName';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNameFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedName {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedName();
}
