import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import {SyncPostRequestBody} from './syncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sync method. */
export class SyncPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SyncPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The syncType property */
    public syncType?: DeviceManagementExchangeConnectorSyncType | undefined;
    /**
     * Instantiates a new syncPostRequestBody and sets the default values.
     * @param syncPostRequestBodyParameterValue 
     */
    public constructor(syncPostRequestBodyParameterValue?: SyncPostRequestBody | undefined) {
        this.additionalData = syncPostRequestBodyParameterValue?.additionalData ? syncPostRequestBodyParameterValue?.additionalData! : {}
        this.syncType = syncPostRequestBodyParameterValue?.syncType ;
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
        writer.writeEnumValue<DeviceManagementExchangeConnectorSyncType>("syncType", this.syncType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
