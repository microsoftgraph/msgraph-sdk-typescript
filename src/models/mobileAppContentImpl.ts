import {createMobileAppContentFileFromDiscriminatorValue} from './createMobileAppContentFileFromDiscriminatorValue';
import {EntityImpl, MobileAppContentFileImpl} from './index';
import {MobileAppContent} from './mobileAppContent';
import {MobileAppContentFile} from './mobileAppContentFile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains content properties for a specific app version. Each mobileAppContent can have multiple mobileAppContentFile. */
export class MobileAppContentImpl extends EntityImpl implements MobileAppContent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of files for this app content version. */
    public files?: MobileAppContentFile[] | undefined;
    /**
     * Instantiates a new mobileAppContent and sets the default values.
     * @param mobileAppContentParameterValue 
     */
    public constructor(mobileAppContentParameterValue?: MobileAppContent | undefined) {
        super(mobileAppContentParameterValue);
        this.additionalData = mobileAppContentParameterValue?.additionalData ? mobileAppContentParameterValue?.additionalData! : {};
        const filesArrValue: MobileAppContentFileImpl[] = []; mobileAppContentParameterValue.files?.forEach(element => {filesArrValue.push(element instanceof MobileAppContentFileImpl? element : new MobileAppContentFileImpl(element));});
        this.files = filesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "files": n => { this.files = n.getCollectionOfObjectValues<MobileAppContentFileImpl>(createMobileAppContentFileFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.files && this.files.length != 0){        const filesArrValue: MobileAppContentFileImpl[] = []; this.files?.forEach(element => {filesArrValue.push(element instanceof MobileAppContentFileImpl? element : new MobileAppContentFileImpl(element));});
            writer.writeCollectionOfObjectValues<MobileAppContentFileImpl>("files", filesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
