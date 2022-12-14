import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="div_start">
        <div className="div1">
          <p className="social_style"> Social Links</p>
          <ul className="social_footer_ul">
            <li>
              <a href="http://webenlance.com">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="div2">
          <Icon
            icon="simple-icons:vodafone"
            color="white"
            width="50"
            height="50"
          />
        </div>
      </div>

      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p className="mb10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +91-9999878398{" "}
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> info@example.com{" "}
            </p>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Image Rectoucing</a>
              </li>
              <li>
                <a href="http://webenlance.com">Clipping Path</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hollow Man Montage</a>
              </li>
              <li>
                <a href="http://webenlance.com">Ebay & Amazon</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Remove Background</a>
              </li>
              <li>
                <a href="http://webenlance.com">Shadows & Mirror Reflection</a>
              </li>
              <li>
                <a href="http://webenlance.com">Logo Design</a>
              </li>
              <li>
                <a href="http://webenlance.com">Vectorization</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fa fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="foote_bottom_ul_amrc">
          <li>
            <a href="http://webenlance.com">Home</a>
          </li>
          <li>
            <a href="http://webenlance.com">About</a>
          </li>
          <li>
            <a href="http://webenlance.com">Services</a>
          </li>
          <li>
            <a href="http://webenlance.com">Pricing</a>
          </li>
          <li>
            <a href="http://webenlance.com">Blog</a>
          </li>
          <li>
            <a href="http://webenlance.com">Contact</a>
          </li>
        </ul>
        <p className="text-center">
          Copyright @2017 | Designed With by <a href="#">Vodafone</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
