import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {DataSource} from './dataSource';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSource(dataSource: DataSource | undefined = {} as DataSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSource),
        "createdBy": n => { dataSource.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { dataSource.createdDateTime = n.getDateValue(); },
        "displayName": n => { dataSource.displayName = n.getStringValue(); },
        "holdStatus": n => { dataSource.holdStatus = n.getEnumValue<DataSourceHoldStatus>(DataSourceHoldStatus); },
    }
}
