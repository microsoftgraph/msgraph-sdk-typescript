import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {DataSourceContainer} from './dataSourceContainer';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSourceContainer(dataSourceContainer: DataSourceContainer | undefined = {} as DataSourceContainer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSourceContainer),
        "createdDateTime": n => { dataSourceContainer.createdDateTime = n.getDateValue(); },
        "displayName": n => { dataSourceContainer.displayName = n.getStringValue(); },
        "holdStatus": n => { dataSourceContainer.holdStatus = n.getEnumValue<DataSourceHoldStatus>(DataSourceHoldStatus); },
        "lastModifiedDateTime": n => { dataSourceContainer.lastModifiedDateTime = n.getDateValue(); },
        "releasedDateTime": n => { dataSourceContainer.releasedDateTime = n.getDateValue(); },
        "status": n => { dataSourceContainer.status = n.getEnumValue<DataSourceContainerStatus>(DataSourceContainerStatus); },
    }
}
