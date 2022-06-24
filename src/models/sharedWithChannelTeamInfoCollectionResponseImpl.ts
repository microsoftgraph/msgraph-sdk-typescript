import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from './createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {SharedWithChannelTeamInfoImpl} from './index';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfoCollectionResponse} from './sharedWithChannelTeamInfoCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedWithChannelTeamInfoCollectionResponseImpl implements SharedWithChannelTeamInfoCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SharedWithChannelTeamInfo[] | undefined;
    /**
     * Instantiates a new SharedWithChannelTeamInfoCollectionResponse and sets the default values.
     * @param sharedWithChannelTeamInfoCollectionResponseParameterValue 
     */
    public constructor(sharedWithChannelTeamInfoCollectionResponseParameterValue?: SharedWithChannelTeamInfoCollectionResponse | undefined) {
        this.additionalData = sharedWithChannelTeamInfoCollectionResponseParameterValue?.additionalData ? sharedWithChannelTeamInfoCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = sharedWithChannelTeamInfoCollectionResponseParameterValue?.nextLink;
        const valueArrValue: SharedWithChannelTeamInfoImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof SharedWithChannelTeamInfoImpl? element : new SharedWithChannelTeamInfoImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SharedWithChannelTeamInfoImpl>(createSharedWithChannelTeamInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
            writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: SharedWithChannelTeamInfoImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof SharedWithChannelTeamInfoImpl? element : new SharedWithChannelTeamInfoImpl(element));});
            writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfoImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
