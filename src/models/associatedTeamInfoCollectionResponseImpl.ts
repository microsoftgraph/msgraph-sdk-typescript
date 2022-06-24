import {AssociatedTeamInfo} from './associatedTeamInfo';
import {AssociatedTeamInfoCollectionResponse} from './associatedTeamInfoCollectionResponse';
import {createAssociatedTeamInfoFromDiscriminatorValue} from './createAssociatedTeamInfoFromDiscriminatorValue';
import {AssociatedTeamInfoImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssociatedTeamInfoCollectionResponseImpl implements AssociatedTeamInfoCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AssociatedTeamInfo[] | undefined;
    /**
     * Instantiates a new AssociatedTeamInfoCollectionResponse and sets the default values.
     * @param associatedTeamInfoCollectionResponseParameterValue 
     */
    public constructor(associatedTeamInfoCollectionResponseParameterValue?: AssociatedTeamInfoCollectionResponse | undefined) {
        this.additionalData = associatedTeamInfoCollectionResponseParameterValue?.additionalData ? associatedTeamInfoCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = associatedTeamInfoCollectionResponseParameterValue?.nextLink;
        const valueArrValue: AssociatedTeamInfoImpl[] = []; associatedTeamInfoCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof AssociatedTeamInfoImpl? element : new AssociatedTeamInfoImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AssociatedTeamInfoImpl>(createAssociatedTeamInfoFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AssociatedTeamInfoImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof AssociatedTeamInfoImpl? element : new AssociatedTeamInfoImpl(element));});
            writer.writeCollectionOfObjectValues<AssociatedTeamInfoImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
