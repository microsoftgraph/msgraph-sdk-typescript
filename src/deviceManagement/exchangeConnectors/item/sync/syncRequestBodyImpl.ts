import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import {SyncRequestBody} from './syncRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sync method.  */
export class SyncRequestBodyImpl implements AdditionalDataHolder, Parsable, SyncRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The syncType property  */
    syncType?: DeviceManagementExchangeConnectorSyncType | undefined;
    /**
     * Instantiates a new syncRequestBody and sets the default values.
     * @param syncRequestBodyParameterValue 
     */
    public constructor(syncRequestBodyParameterValue?: SyncRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = syncRequestBodyParameterValue?.additionalData ? {} : syncRequestBodyParameterValue?.additionalData!
        this.syncType = syncRequestBodyParameterValue?.syncType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "syncType": n => { this.syncType = n.getEnumValue<DeviceManagementExchangeConnectorSyncType>(DeviceManagementExchangeConnectorSyncType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.syncType){
        if(this.syncType)
        writer.writeEnumValue<DeviceManagementExchangeConnectorSyncType>("syncType", this.syncType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
