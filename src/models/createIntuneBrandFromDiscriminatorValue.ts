import {IntuneBrandImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntuneBrandFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntuneBrandImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntuneBrandImpl();
}
