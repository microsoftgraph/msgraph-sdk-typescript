import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {DataSource} from './dataSource';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSource(dataSource: DataSource | undefined = {} as DataSource, writer: SerializationWriter) : void {
        serializeEntity(writer, dataSource)
        writer.writeObjectValue<IdentitySet>("createdBy", dataSource.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", dataSource.createdDateTime);
        writer.writeStringValue("displayName", dataSource.displayName);
        writer.writeEnumValue<DataSourceHoldStatus>("holdStatus", dataSource.holdStatus);
}
