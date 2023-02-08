// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


// Created by HungNN

//certificate of land use rights
contract RedBook {
    address public owner;

    mapping(uint256 => address) public deactivedRedBooksOf;
    mapping(uint256 => address) public ownerOf;
    mapping(address => uint256) public redbooksOf;

    enum MucDichSuDung {
        DAT_TRONG_LUA_NUOC,
        DAT_TRONG_LUA_NUONG,
        DAT_TRONG_CAY_HANG_NAM_KHAC,
        DAT_TRONG_CAY_LAU_NAM,
        DAT_RUNG_SAN_XUAT,
        DAT_RUNG_PHONG_HO,
        DAT_RUNG_DAC_DUNG,
        DAT_NUOI_TRONG_THUY_SAN,
        DAT_LAM_MUOI,
        DAT_NONG_NGHIEP_KHAC,
        DAT_CO_SO_SAN_XUAT_PHI_NONG_NGHIEP,
        DAT_PHI_NONG_NGHIEP_KHAC,
        DAT_O,
        DAT_THUONGMAI_DICHVU
    }

    enum Deactivated { NO, YES }

    enum HinhThucSuDung{
        SU_DUNG_RIENG,
        SU_DUNG_CHUNG
    }

    struct RedBookStruct {
        uint256 id;
        string title;
        string description;
        HinhThucSuDung hinhThucSD;
        MucDichSuDung mucDichSD;
        string loaiNhaO;
        uint dienTich;
        Deactivated deactivated;
        address owner;
        Coordinate[] coord;
    }

    struct Coordinate {
        uint256 lat;
        uint256 long;
    }

    RedBookStruct[] redbooks;

    modifier ownerOnly() {
        require(msg.sender == owner, "Owner reserved only");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createRedBook(/*... */)
        external
        returns (bool)
    {
        // require(bytes(title).length > 0, "Title cannot be empty");
        // require(bytes(description).length > 0, "Description cannot be empty");

        // ownerOf[id] = msg.sender;
        // redbooksOf[msg.sender]++;

        // redbooks.push(
        //     RedBookStruct(
        //         //...
        //     )
        // );

        return true;
    }

    function showRedBook(uint256 id)
        external
        view
        returns (RedBookStruct memory)
    {
        RedBookStruct memory res;
        for (uint256 i = 0; i < redbooks.length; i++) {
            if (redbooks[i].id == id) {
                res = redbooks[i];
            }
        }
        return res;
    }

    function getRedBooks() external view returns (RedBookStruct[] memory) {
        return redbooks;
    }

    function deleteRedBook(uint256 id) external returns (bool) {
        require(ownerOf[id] == msg.sender, "Unauthorized entity");

        for (uint256 i = 0; i < redbooks.length; i++) {
            if (redbooks[i].id == id) {
                redbooks[i].deactivated = Deactivated.YES;
                redbooks.push(redbooks[i]);
                deactivedRedBooksOf[id] = ownerOf[id];
                delete redbooks[i];
                delete ownerOf[id];
            }
        }

        redbooksOf[msg.sender]--;

        return true;
    }

}
