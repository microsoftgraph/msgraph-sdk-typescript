import {createIosHomeScreenItemFromDiscriminatorValue} from './createIosHomeScreenItemFromDiscriminatorValue';
import {IosHomeScreenItemImpl} from './index';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A page containing apps, folders, and web clips on the Home Screen. */
export class IosHomeScreenPageImpl implements IosHomeScreenPage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the page */
    public displayName?: string | undefined;
    /** A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements. */
    public icons?: IosHomeScreenItem[] | undefined;
    /**
     * Instantiates a new iosHomeScreenPage and sets the default values.
     * @param iosHomeScreenPageParameterValue 
     */
    public constructor(iosHomeScreenPageParameterValue?: IosHomeScreenPage | undefined) {
        this.additionalData = iosHomeScreenPageParameterValue?.additionalData ? iosHomeScreenPageParameterValue?.additionalData! : {};
        this.displayName = iosHomeScreenPageParameterValue?.displayName;
        this.icons = iosHomeScreenPageParameterValue?.icons;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "icons": n => { this.icons = n.getCollectionOfObjectValues<IosHomeScreenItemImpl>(createIosHomeScreenItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.icons && this.icons.length != 0){        const iconsArrValue: IosHomeScreenItemImpl[] = []; this.icons?.forEach(element => {iconsArrValue.push(new IosHomeScreenItemImpl(element));});
            writer.writeCollectionOfObjectValues<IosHomeScreenItemImpl>("icons", iconsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
