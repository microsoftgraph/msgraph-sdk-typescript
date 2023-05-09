import {serializeEntity} from '../serializeEntity';
import {DataSourceContainer} from './dataSourceContainer';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSourceContainer(writer: SerializationWriter, dataSourceContainer: DataSourceContainer | undefined = {} as DataSourceContainer) : void {
        serializeEntity(writer, dataSourceContainer)
        writer.writeDateValue("createdDateTime", dataSourceContainer.createdDateTime);
        writer.writeStringValue("displayName", dataSourceContainer.displayName);
        writer.writeEnumValue<DataSourceHoldStatus>("holdStatus", dataSourceContainer.holdStatus);
        writer.writeDateValue("lastModifiedDateTime", dataSourceContainer.lastModifiedDateTime);
        writer.writeDateValue("releasedDateTime", dataSourceContainer.releasedDateTime);
        writer.writeEnumValue<DataSourceContainerStatus>("status", dataSourceContainer.status);
}
