import {createMobileAppAssignmentFromDiscriminatorValue} from './createMobileAppAssignmentFromDiscriminatorValue';
import {MobileAppAssignmentImpl} from './index';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentCollectionResponse} from './mobileAppAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppAssignmentCollectionResponseImpl implements MobileAppAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MobileAppAssignment[] | undefined;
    /**
     * Instantiates a new MobileAppAssignmentCollectionResponse and sets the default values.
     * @param mobileAppAssignmentCollectionResponseParameterValue 
     */
    public constructor(mobileAppAssignmentCollectionResponseParameterValue?: MobileAppAssignmentCollectionResponse | undefined) {
        this.additionalData = mobileAppAssignmentCollectionResponseParameterValue?.additionalData ? mobileAppAssignmentCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = mobileAppAssignmentCollectionResponseParameterValue?.nextLink;
        const valueArrValue: MobileAppAssignmentImpl[] = []; mobileAppAssignmentCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof MobileAppAssignmentImpl? element : new MobileAppAssignmentImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileAppAssignmentImpl>(createMobileAppAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MobileAppAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof MobileAppAssignmentImpl? element : new MobileAppAssignmentImpl(element));});
            writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
