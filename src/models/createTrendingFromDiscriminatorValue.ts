import {TrendingImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrendingFromDiscriminatorValue(parseNode: ParseNode | undefined) : TrendingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TrendingImpl();
}
