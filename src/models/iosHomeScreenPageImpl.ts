import {createIosHomeScreenItemFromDiscriminatorValue} from './createIosHomeScreenItemFromDiscriminatorValue';
import {IosHomeScreenItemImpl} from './index';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A page containing apps, folders, and web clips on the Home Screen. */
export class IosHomeScreenPageImpl implements IosHomeScreenPage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the page */
    private _displayName?: string | undefined;
    /** A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements. */
    private _icons?: IosHomeScreenItem[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new iosHomeScreenPage and sets the default values.
     * @param iosHomeScreenPageParameterValue 
     */
    public constructor(iosHomeScreenPageParameterValue?: IosHomeScreenPage | undefined) {
        this._additionalData = iosHomeScreenPageParameterValue?.additionalData ? iosHomeScreenPageParameterValue?.additionalData! : {};
        this._displayName = iosHomeScreenPageParameterValue?.displayName;
        this._icons = iosHomeScreenPageParameterValue?.icons;
    };
    /**
     * Gets the displayName property value. Name of the page
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the page
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the icons property value. A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements.
     * @returns a IosHomeScreenItemInterface
     */
    public get icons() {
        return this._icons;
    };
    /**
     * Sets the icons property value. A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the icons property.
     */
    public set icons(value: IosHomeScreenItem[] | undefined) {
        if(value) {
            const iconsArrValue: IosHomeScreenItemImpl[] = [];
            this.icons?.forEach(element => {
                iconsArrValue.push((element instanceof IosHomeScreenItemImpl? element:new IosHomeScreenItemImpl(element)));
            });
            this._icons = iconsArrValue;
        }
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
        if(this.icons && this.icons.length != 0){        const iconsArrValue: IosHomeScreenItemImpl[] = [];
        this.icons?.forEach(element => {
            iconsArrValue.push((element instanceof IosHomeScreenItemImpl? element:new IosHomeScreenItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IosHomeScreenItemImpl>("icons", iconsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
